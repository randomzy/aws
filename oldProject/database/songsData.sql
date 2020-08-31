-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 12, 2020 at 09:57 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `songsData`
--

-- --------------------------------------------------------

--
-- Table structure for table `songsData`
--

CREATE TABLE `songsData` (
  `id` varchar(11) COLLATE utf8_bin NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `bpm` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `chords` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ;

--
-- Dumping data for table `songsData`
--

INSERT INTO `songsData` (`id`, `name`, `bpm`, `length`, `chords`, `last_modified`) VALUES
('05UZrTV04Tk', 'Brad Sucks - Dirtbag', 160, 0, '{}', '2020-02-08 20:49:23'),
('8nOAdiDyMZ4', 'Brad Sucks - Dropping Out of School\r\n', 125, 0, '{}', '2020-02-11 18:45:10'),
('AiKcaZVbmMM', 'Brad Sucks - Look And Feel Years Younger\r\n', 95, 274, '{}', '2020-02-11 18:40:02'),
('kIGMakkT0sQ', 'Brad Sucks - Borderline', 160, 0, '{}', '2020-02-08 20:47:02'),
('mQER0A0ej0M', 'The Beatles - Hey Jude', 147, 0, '{}', '2020-02-11 18:57:10'),
('pAgnJDJN4VA', 'AC/DC - Back In Black', 94, 0, '{}', '2020-02-11 19:02:07'),
('pJqVTlHYVlc', 'Lund- Broken', 134, 0, '{}', '2020-02-11 18:54:23'),
('q0hyYWKXF0Q', 'TONES AND I - DANCE MONKEY', 97, 0, '{}', '2020-02-12 20:16:51'),
('z6cU4jndgNk', 'Brad Sucks - Making Me Nervous', 120, 0, '{}', '2020-02-11 18:48:51');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
