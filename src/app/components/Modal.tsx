import { IModalProps } from "../utils/dataType";

const Modal = (props: IModalProps) => {
  return (
    <dialog id={props.id} className={`modal ${props.isOpen && "modal-open"}`}>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            //@ts-ignore
            onClick={props.closeHandler}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{props.title}</h3>
        <div className="py-4">{props.content}</div>
        <div className="py-4">{props.children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
