import { CardType } from "../Types/Types";
import "./style.css";
import * as React from "react";
interface AccessModalProps {
    isOpen: boolean;
    content: CardType | null;
    closeModal: () => void;
    navigateToAccessUrl: (url: string) => void;
}
declare const AccessModal: React.FC<AccessModalProps>;
export default AccessModal;
