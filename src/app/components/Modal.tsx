import React, { ReactNode } from "react";

interface IModalProps {
  id: string;
  title?: string;
  content?: string;
  children: ReactNode;
}

const Modal = (props: IModalProps) => {
  return (
    <dialog id={props.id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="py-4">{props.content}</p>
        <p className="py-4">{props.children}</p>
      </div>
    </dialog>
  );
};

export default Modal;
