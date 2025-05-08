// Assets
// Custom icons
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const tablesTableData = [
  {
    id: 1,
    titre: "Élection Présidentielle 2024",
    status: { text: "Active", color: "green" },
    candidats: "A. Karim, L. Bensalah, M. Idrissi",
    dateDebut: "15/10/2024 08:00",
    dateFin: "15/10/2024 18:00",
  },
  {
    id: 2,
    titre: "Élections Municipales",
    status: { text: "À venir", color: "blue" },
    candidats: "A. Mouline, S. Lahbabi, F. Rami",
    dateDebut: "22/03/2025 08:00",
    dateFin: "22/03/2025 18:00",
  }
];
export const candidatesData = [
  {
    id: 1,
    name: "Candidate A",
    description: "Public service expert with 10 years experience",
    avatar: "/img/candidates/1.jpg",
    votes: 245
  },
  {
    id: 2,
    name: "Candidate B",
    description: "Dedicated information specialist",
    avatar: "/img/candidates/2.jpg",
    votes: 180
  }
];

export const electionStats = [
  { title: "Total Votes", value: 425 },
  { title: "Votes Today", value: 42 },
  { title: "Participation", value: "62%" }
];

export const recentVotes = [
  { voter: "Jean Dupont", candidate: "Candidate A", time: "10 min ago" },
  { voter: "Marie Martin", candidate: "Candidate B", time: "25 min ago" }
];

