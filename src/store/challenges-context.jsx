import { createContext, useState } from "react";

export default function ChallengesContextProvider({ children }) {
  const [challenges, setChallenges] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addChallenge(challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: "active" },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId, newStatus) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  function settingModalState() {
    setIsModalOpen((v) => !v);
  }
  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
    settingModalState,
    isModalOpen,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}

export const ChallengesContext = createContext({
  challenges: [],
  addChallenge: () => {},
  updateChallengeStatus: () => {},
  deleteChallenge: () => {},
  settingModalState: () => {},
  isModalOpen: false,
});
