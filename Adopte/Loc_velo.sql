-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Dim 15 Novembre 2020 à 13:32
-- Version du serveur :  5.7.32-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Loc_velo`
--

-- --------------------------------------------------------

--
-- Structure de la table `Bornes`
--

CREATE TABLE `Bornes` (
  `id_borne` int(11) NOT NULL,
  `dispo_borne` tinyint(1) NOT NULL,
  `id_station` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Bornes`
--

INSERT INTO `Bornes` (`id_borne`, `dispo_borne`, `id_station`) VALUES
(1, 1, 1),
(2, 0, 1),
(3, 0, 1),
(4, 0, 1),
(5, 1, 1),
(6, 1, 1),
(7, 1, 1),
(8, 1, 1),
(9, 1, 1),
(10, 1, 1),
(11, 1, 2),
(12, 1, 2),
(13, 1, 2),
(14, 1, 2),
(15, 1, 2),
(16, 1, 2),
(17, 0, 2),
(18, 0, 2),
(19, 0, 2),
(20, 0, 2),
(21, 0, 3),
(22, 1, 3),
(23, 1, 3),
(24, 1, 3),
(25, 1, 3),
(26, 0, 3),
(27, 0, 3),
(28, 0, 3),
(29, 0, 3),
(30, 0, 3),
(31, 1, 4),
(32, 1, 4),
(33, 1, 4),
(34, 1, 4),
(35, 1, 4),
(36, 0, 4),
(37, 0, 4),
(38, 0, 4),
(39, 0, 4),
(40, 0, 4),
(41, 0, 5),
(42, 1, 5),
(43, 1, 5),
(44, 1, 5),
(45, 1, 5),
(46, 0, 5),
(47, 0, 5),
(48, 0, 5),
(49, 0, 5),
(50, 0, 5),
(51, 1, 6),
(52, 1, 6),
(53, 1, 6),
(54, 1, 6),
(55, 1, 6),
(56, 0, 6),
(57, 0, 6),
(58, 0, 6),
(59, 0, 6),
(60, 0, 6),
(61, 0, 7),
(62, 1, 7),
(63, 1, 7),
(64, 1, 7),
(65, 1, 7),
(66, 0, 7),
(67, 0, 7),
(68, 0, 7),
(69, 0, 7),
(70, 0, 7),
(71, 0, 8),
(72, 1, 8),
(73, 1, 8),
(74, 1, 8),
(75, 1, 8),
(76, 1, 8),
(77, 1, 8),
(78, 1, 8),
(79, 1, 8),
(80, 0, 8),
(81, 0, 9),
(82, 0, 9),
(83, 0, 9),
(84, 1, 9),
(85, 1, 9),
(86, 0, 9),
(87, 0, 9),
(88, 0, 9),
(89, 0, 9),
(90, 0, 9),
(91, 1, 10),
(92, 1, 10),
(93, 1, 10),
(94, 1, 10),
(95, 1, 10),
(96, 0, 10),
(97, 0, 10),
(98, 0, 10),
(99, 0, 10),
(100, 0, 10);

-- --------------------------------------------------------

--
-- Structure de la table `Reservation`
--

CREATE TABLE `Reservation` (
  `id_reservation` int(11) NOT NULL,
  `id_velo` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `cb` int(30) NOT NULL,
  `code_resa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Reservation`
--

INSERT INTO `Reservation` (`id_reservation`, `id_velo`, `id_user`, `cb`, `code_resa`) VALUES
(12, 1, 13, 56465456, 361),
(13, 21, 13, 123456, 764),
(14, 2, 13, 123456, 272),
(15, 3, 13, 123456, 231),
(16, 4, 13, 123, 859),
(17, 43, 13, 123, 166),
(18, 36, 13, 123, 508);

-- --------------------------------------------------------

--
-- Structure de la table `Station`
--

CREATE TABLE `Station` (
  `id_station` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Station`
--

INSERT INTO `Station` (`id_station`, `x`, `y`) VALUES
(1, 150, 100),
(2, 500, 100),
(3, 800, 100),
(4, 50, 350),
(5, 350, 350),
(6, 650, 350),
(7, 950, 350),
(8, 150, 600),
(9, 500, 600),
(10, 800, 600);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `id_user` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`id_user`, `nom`, `prenom`, `pseudo`, `mdp`) VALUES
(13, 'Test', 'retest', 'test', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(15, 'Boisffils', 'geo', 'geo', '51eac6b471a284d3341d8c0c63d0f1a286262a18'),
(16, 'flaubert', 'gustave', 'admin', '40bd001563085fc35165329ea1ff5c5ecbdbbeef');

-- --------------------------------------------------------

--
-- Structure de la table `Velos`
--

CREATE TABLE `Velos` (
  `id_velo` int(11) NOT NULL,
  `id_borne` int(11) NOT NULL,
  `etat_velo` tinyint(1) NOT NULL,
  `usure_velo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Velos`
--

INSERT INTO `Velos` (`id_velo`, `id_borne`, `etat_velo`, `usure_velo`) VALUES
(1, 91, 1, 0),
(2, 92, 1, 0),
(3, 93, 1, 0),
(4, 94, 1, 0),
(5, 5, 1, 0),
(6, 11, 1, 0),
(7, 12, 1, 0),
(8, 13, 1, 0),
(9, 14, 1, 0),
(10, 15, 1, 0),
(11, 77, 1, 0),
(12, 22, 1, 0),
(13, 23, 1, 0),
(14, 24, 1, 0),
(15, 25, 1, 0),
(16, 31, 1, 0),
(17, 32, 1, 0),
(18, 33, 1, 0),
(19, 34, 1, 0),
(20, 35, 1, 0),
(21, 79, 1, 0),
(22, 42, 1, 0),
(23, 43, 1, 0),
(24, 44, 1, 0),
(25, 45, 1, 0),
(26, 51, 1, 0),
(27, 52, 1, 0),
(28, 53, 1, 0),
(29, 54, 1, 0),
(30, 55, 1, 0),
(31, 8, 1, 0),
(32, 62, 1, 0),
(33, 63, 1, 0),
(34, 64, 1, 0),
(35, 65, 1, 0),
(36, 95, 1, 0),
(37, 72, 1, 0),
(38, 73, 1, 0),
(39, 74, 1, 0),
(40, 75, 1, 0),
(41, 9, 1, 0),
(42, 10, 1, 0),
(43, 1, 1, 0),
(44, 84, 1, 0),
(45, 85, 1, 0),
(46, 6, 1, 0),
(47, 76, 1, 0),
(48, 7, 1, 0),
(49, 16, 1, 0),
(50, 78, 1, 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Bornes`
--
ALTER TABLE `Bornes`
  ADD PRIMARY KEY (`id_borne`),
  ADD KEY `fk_id_station` (`id_station`);

--
-- Index pour la table `Reservation`
--
ALTER TABLE `Reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `fk_id_velo` (`id_velo`),
  ADD KEY `fk_id_user` (`id_user`);

--
-- Index pour la table `Station`
--
ALTER TABLE `Station`
  ADD PRIMARY KEY (`id_station`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id_user`);

--
-- Index pour la table `Velos`
--
ALTER TABLE `Velos`
  ADD PRIMARY KEY (`id_velo`),
  ADD KEY `fk_id_borne` (`id_borne`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Bornes`
--
ALTER TABLE `Bornes`
  MODIFY `id_borne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
--
-- AUTO_INCREMENT pour la table `Reservation`
--
ALTER TABLE `Reservation`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT pour la table `Station`
--
ALTER TABLE `Station`
  MODIFY `id_station` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT pour la table `Velos`
--
ALTER TABLE `Velos`
  MODIFY `id_velo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Bornes`
--
ALTER TABLE `Bornes`
  ADD CONSTRAINT `fk_id_station` FOREIGN KEY (`id_station`) REFERENCES `Station` (`id_station`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Reservation`
--
ALTER TABLE `Reservation`
  ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_velo` FOREIGN KEY (`id_velo`) REFERENCES `Velos` (`id_velo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Velos`
--
ALTER TABLE `Velos`
  ADD CONSTRAINT `fk_id_borne` FOREIGN KEY (`id_borne`) REFERENCES `Bornes` (`id_borne`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
