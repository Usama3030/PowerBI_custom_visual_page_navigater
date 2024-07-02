import { CardType } from "../Types/Types";
import "./style.css";
import * as React from "react";
interface ModalProps {
    isOpen: boolean;
    content: CardType;
    closeModal: () => void;
    backgroundColor: string;
    secondaryBackgroundColor: string;
    fontColor: string;
    secondaryFontColor: string;
    navigateToUrl: (url: string) => void;
    openAccessModal: (content: CardType) => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
