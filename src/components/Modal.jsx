import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ChallengesContext } from "../store/challenges-context";

export default function Modal({ title, children, onClose }) {
  // const hiddenAnimateState = { opacity: 0, y: -30 };
  const { isModalOpen } = useContext(ChallengesContext);
  return createPortal(
    <>
      {isModalOpen && <div className="backdrop" onClick={onClose} />}
      {isModalOpen && (
        <motion.dialog
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          open
          className="modal"
        >
          <h2>{title}</h2>
          {children}
        </motion.dialog>
      )}
    </>,
    document.getElementById("modal")
  );
}
