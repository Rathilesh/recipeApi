-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 09, 2023 at 04:07 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipi_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint NOT NULL,
  `name` varchar(250) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Biriyani', NULL, '2023-07-08 15:44:53', NULL, NULL),
(2, 'Fry', NULL, '2023-07-08 15:44:53', NULL, NULL),
(3, 'Desert', NULL, '2023-07-09 14:35:58', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `disabledrefreshtokens`
--

CREATE TABLE `disabledrefreshtokens` (
  `id` bigint NOT NULL,
  `token` varchar(200) NOT NULL,
  `UserId` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `disabledrefreshtokens`
--

INSERT INTO `disabledrefreshtokens` (`id`, `token`, `UserId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg4ODIwOTkxLCJleHAiOjI4OTg0MjA5OTF9.yJrtLxxK9jNyRXf9mV51vlmsLnIsONnBtD0VcIKKuOE', 3, '2023-07-08 13:00:21', '2023-07-08 13:00:21', NULL),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg4ODIxMjg2LCJleHAiOjI4OTg0MjEyODZ9.Ee2YcL0zZh0CDxxlR5W3m-PU4P6FgsFSVxGmSOWJwCg', 3, '2023-07-08 13:02:06', '2023-07-08 13:02:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` bigint NOT NULL,
  `name` varchar(200) NOT NULL,
  `makingDescription` text NOT NULL,
  `image` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `preparationTime` float DEFAULT NULL,
  `totalLikes` int DEFAULT NULL,
  `categoryId` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `makingDescription`, `image`, `preparationTime`, `totalLikes`, `categoryId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'manjali biriyani', 'some description here', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-FRH27-UwEig%2FYMxizH2IiBI%2FAAAAAAAAMe8%2F0bc5kOImjjIwCQL1hoUWhx5cye0iwwSLACLcBGAsYHQ%2Fs1920%2Fmanjali%252Bbiriyani%252Bfor%252Bblog.jpg&f=1&nofb=1&ipt=7ee66becef09f71b8e911dd6a583c71210b91ac9c011fb76056db2bcde2c8da4&ipo=images', 1.5, 123, 1, '2023-07-08 14:52:22', NULL, NULL),
(2, 'Chilly Chicken', 'some chilly description', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-SoqfR5Hoaec%2FV_7M52DiuiI%2FAAAAAAAABaw%2FH-aYSCKQ1jsgpZRUMgSUgC_F0BI9QT6hQCLcB%2Fs1600%2FChilli%252BChiken.jpg&f=1&nofb=1&ipt=928a744a191a331b8ac25f01091f6840296cec4f6f504deea5862091940945df&ipo=images', 1, 65000, 2, '2023-07-08 14:52:22', NULL, NULL),
(3, 'Paragon Style Biriyani', 'famous biriyani in india', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thenewsminute.com%2Fsites%2Fdefault%2Ffiles%2Fchicken%2520biryani%2520paragon.jpg&f=1&nofb=1&ipt=e80260e062f84a445959f94e42748fe34b5581eed199b1c4f8c927bd54a3ccfd&ipo=images', 2, 9000, 1, '2023-07-09 14:50:56', NULL, NULL),
(4, 'Vannilla Ice creme  ', 'totasdlls sad asd alsdasld \r\nas dasd asd as asd\r\nsa d\r\nasd as\r\nd asdasd asdasdas', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2.simplysated.com%2Fwp-content%2Fuploads%2F2014%2F08%2FHomemade-Vanilla-Ice-Cream-22-1-P7270022.jpg&f=1&nofb=1&ipt=acb5d7678a3b89a250b768874706331ea06dbfef072904d54177fba36b92dd5c&ipo=images', 1, 90000, 3, '2023-07-09 14:58:37', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 'Rathilesh', 'C', 'rathilesh.c@gmail.com', '$2b$10$wynv03h.YOMV9ddaOvNZIOaLbgWzEw2btaooTa612xORX77BEQZxa', '2023-07-08 11:39:51', '2023-07-08 11:39:51', NULL),
(3, 'Rathilesh', 'C', 'rathilesh.c@gmail.com1', '$2b$10$HhamkdLR2ZgCo0BQYnjdJOzpvu.24wlg6PCZbRQ22s7GvShrLPJYy', '2023-07-08 12:56:10', '2023-07-08 12:56:10', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disabledrefreshtokens`
--
ALTER TABLE `disabledrefreshtokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `disabledrefreshtokens`
--
ALTER TABLE `disabledrefreshtokens`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
