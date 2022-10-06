# School of Computing &mdash; Year 4 Project Proposal Form

> Edit (then commit and push) this document to complete your proposal form.
> Make use of figures / diagrams where appropriate.
>
> Do not rename this file.

## SECTION A

|                     |                   |
|---------------------|-------------------|
|Project Title:       | GAAdle            |
|Student 1 Name:      | Ruadhan McCloskey |
|Student 1 ID:        | 19444786          |
|Student 2 Name:      | Daniel McCartney  |
|Student 2 ID:        | 19395186          |
|Project Supervisor:  | Renaat Verbruggen |

> Ensure that the Supervisor formally agrees to supervise your project; this is only recognised once the
> Supervisor assigns herself/himself via the project Dashboard.
>
> Project proposals without an assigned
> Supervisor will not be accepted for presentation to the Approval Panel.

## SECTION B

> Guidance: This document is expected to be approximately 3 pages in length, but it can exceed this page limit.
> It is also permissible to carry forward content from this proposal to your later documents (e.g. functional
> specification) as appropriate.
>
> Your proposal must include *at least* the following sections.


### Introduction

> Describe the general area covered by the project.

  For our 4th year project we have decided to create a Wordle type game for guessing county GAA players. This will be a guessing game where hints are given based on attributes of the players that you guess. For example if you guess Dean Rock and the player you're trying to guess plays for a county in Leinster that field will show up green.

### Outline

> Outline the proposed project.

 We want to create this game to promote the GAA and to create a fun game for people to play. We want to create a guessing game for GAA players where you aren't just blindly guessing players until you get it right. Each time you guess a player you will get closer to your goal. We also want users to want to come back to this game so we want to implement features that give the user a sense of accomplishment when playing this game. We would also like to make this game competitive so you can play and compete against your friends. 

### Background

> Where did the ideas come from?

 Throughout Summer we started playing Wordle which is a game where you try to guess a 5 letter word. If you guess a word that has a letter or letters in common with the required word the letter will show up in one of two colours. Yellow if it's in the word but in the wrong place and green if the letter is in the correct place in the word. This gave us the idea to create a similar game where you guess players instead of words. We also wanted to do GAA players as GAA is a very important part of the culture in Ireland.

### Achievements

> What functions will the project provide? Who will the users be?

 The function of this project is to promote the GAA and some of the lesser known players in Gaelic Football and also to create a fun and easy to use game for the user. The users will be people who enjoy watching Gaelic Football.

### Justification

> Why/when/where/how will it be useful?

 This app will be useful as it will promote the GAA and it will be a fun game for people to play which will also educate them on other county players who they didn’t know before. It will be a webapp that anyone can play online making it easy for users to access the game.

### Programming language(s)

> List the proposed language(s) to be used.

 We will be using the angular framework for this project. The frontend will be coded using TypeScript, HTML and CSS and the backend will be coded using the .NET framework with c#.

### Programming tools / Tech stack

> Describe the compiler, database, web server, etc., and any other software tools you plan to use.

 We plan to use Angular and we are working on getting a database of all the country GAA players from the GAA at the moment. The database and the corresponding tables will be handled inside Microsoft SQL Server Management System (MSSQL)

### Hardware

> Describe any non-standard hardware components which will be required.

 There will not be any non-standard hardware components required.

### Learning Challenges

> List the main new things (technologies, languages, tools, etc) that you will have to learn.

 Neither of us have a lot of experience in working with a fully functioning backend so that will be a challenge for us.

### Breakdown of work

> Clearly identify who will undertake which parts of the project.
>
> It must be clear from the explanation of this breakdown of work both that each student is responsible for
> separate, clearly-defined tasks, and that those responsibilities substantially cover all of the work required
> for the project.

#### Student 1

I will work on creating a random player selector algorithm, I will also help implement a guessing mechanism and I will work on adding certain columns to the players such as their age, height, county, position, province etc.

#### Student 2

We both will agree on a mock UI design and structure and I will work on implementing the design using HTML and CSS.I will also work on the filter used to search through the database of players while making guesses. We will also look into a login system and leaderboards together. 

## Example

> Example: Here's how you can include images in markdown documents...

<!-- Basically, just use HTML! -->

<p align="center">
  <img src="./res/cat.png" width="300px">
</p>

