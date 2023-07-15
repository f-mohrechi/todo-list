import React from "react";
import "./modal.css";

class Modal extends React.Component {
  state = {
    opacity: 1,
    showModal: false,
    maxWidth: 600,
  };

  hideModal = (cb) => {
    document.body.classList.remove("body-no-sroll");
    window.removeEventListener("keydown", this.keyPress);
    if (this.state.showModal) {
      this.setState({ closing: true });

      if (this.props.onHide) {
        this.props.onHide();
      }

      setTimeout(() => {
        this.setState({ showModal: false }, () => {
          if (cb) {
            cb();
          }
        });
      }, 500);
    }
  };

  showModal = (cb) => {
    window.addEventListener("keydown", this.keyPress);
    this.setState({ showModal: true, closing: false });
    setTimeout(() => {
      document.body.classList.add("body-no-sroll");
    }, 50);
    if (cb) {
      cb();
    }
  };

  keyPress = (e) => {
    if (e?.keyCode == 27) {
      this.hideModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyPress);
    if (this.state.showModal) {
      document.body.classList.remove("body-no-sroll");
    }
  }

  onScroll = () => {
    if (this.props.onScroll) {
      this.props.onScroll();
    }
  };

  render() {
    if (this.state.showModal) {
      return (
        <div
          className={"modal " + (this.state.closing ? "closing" : "")}
          onClick={() => this.hideModal()}
        >
          <div
            onScroll={() => this.onScroll()}
            className="modalContent"
            style={{ paddingBottom: 100 }}
            onClick={() => this.hideModal()}
          >
            <div
              className="w-100"
              style={{
                maxWidth: this.state.maxWidth,
                marginTop: "5%",
                borderTopLeftRadius: 8,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {this.props.children}
            </div>
          </div>

          <button
            className="d-flex justify-content-center align-items-center blur-back"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 20,
              backgroundColor: "#eeebf5",
              borderRadius: 30,
              width: 40,
              height: 40,
              border: "none",
            }}
            onClick={() => {
              this.hideModal();
            }}
          >
            <img src="/img/close.svg" style={{ width: 20, height: 20 }} />
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Modal;
