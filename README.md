# JSCALC

This project will showcase a single-page app using html, css, and javascript to provide for interactive elements.

The single-page app will be a graphing calculator which will be able to evaluate functions as well as draw graphs of those functions where required.

The project itself will deploy a model-view-controller design pattern, separating the logic from the user input and the view aspects.

This Project was submitted as Milestone Project 2 as part of the developer's studies with the Code Institute.

## Table of Contents

1. [Design and Development](#Design-and-Development)
    - [User Stories](#User-Stories)
    - [Strategy](#Strategy)
    - [Scope](#Scope)
    - [Structure](#Structure)
    - [Skeleton](#Skeleton)
    - [Surface](#Surface)

2. [Features](#Features)
    - [Features to be implemented](#Features-to-be-implemented)

3. [Testing](#Testing)
4. [Deployment](#Deployment)
    - [Using Git & Github](#using-git-&-github)
        - [Git](#Git)
        - [Initialising Git](#initialising-git)
        - [Adding Files to Git](#adding-files-to-git)
        - [Git Commit](#git-commit)
        - [Git Remotes](#git-remotes)
        - [Creating and Uploading a Repository](#creating-&-uploading-a-repository)
        - [Git Branch](#git-branch)
    - [Deploying to Heroku](#deploying-to-heroku)
5. [Credits](#credits)


## Design and Development

### User Stories

As a user, I want:

1. to input numbers into the calculator
2. to perform operations on the numbers I input
3. to have the correct answer of those operations displayed to me
4. for the calculator to have a user friendly interface
5. to be able to perform algebraic operations with the calculator
6. to draw graphs with the calculator
7. to have the calculator have a dark mode
8. to allow me to change the colors of the calculator display
9. to provide an easy way for me to convert values (e.g. imperial to metric)

### Strategy

The strategy plane of UX design concerns itself with high-level decisions about the product and trade-offs between features to be developed now and others to be developed later. Compare feasibility of features with importance.

### Scope

The scope follows on from the strategy plane. Here we focus on developing features in small, incremental blocks until we have a finished or viable product. This permits the realistic budgeting of time and the development of products quickly and effectively.

### Structure

Progressing down the planes, the developer moves from the abstract to the concrete as part of the eternal struggle by humanity to make its desires manifest. Does this mean that all developers are closeted Hegelians? Maybe mad platonists? Who knows? You are still reading this. Why?

The structure plane involves the detailing of how each feature will work together in the project.

### Skeleton

Here we begin to design the interface and the navigation of the product. This should be a natural follow-on from above. Why? Because a bunch of articles, books and papers from a self-styled experts on UX design tell us it should be so. Anyway, this is the bit where you figure out how many distinct html files you will need to write, where to put a nav-bar, and all that stuff. Invariably the nav bar will be at the top, and will transform to a burger menu on mobile. There you have it.

### Surface

Colours (colors for all those US english types), typography, pictures, animations: all the pretty stuff that people like and that marketing firms charge a ransom for. These go on the surface plane and should reinforce the previous planes. If you are a wannabe developer, like myself, the golden thread of the previous planes will inevitably some SAAS money-for-old-rope scheme which the surface layer will bravely attempt to mask. Or it might be a blockchain/coin scam or one of those 'tech' companies that is really just an attempt to circumvent labour protections and regulation with an app. But a pretty font, an endless scroller webpage and some one-word marketing spiel might be enough to turn you into a unicorn, thus proving there are people who are just too rich to invest prudently.

## Features

### Features to be implemented

- Calculation functions: addition, subtraction, division, multiplication, exponents, square root etc. - Javascript functions & classes
- Display buttons, inputs, results of operations - HTML & CSS
- User input - handled by javascript, html

The above features correspond to model, view, controller design pattern. The calculation functions are the model, containing the logic and manipulating the data. The display corresponds to the view, displaying the information the user sees. The user input is the controller, allowing the user to interact with the programme and obtain their desired results.

## Testing

Devise tests as we go along with recordings or pictures to demonstrate operations.

Model Tests:

- Addition function adds two numbers together. Addition is commutative.

- Subtraction function deducts the right-most number from the leftmost. 

- Multiplication yields the product of the left and right numbers.

- Division yields the product of the inverse of the right-most number by the left-most.

- Divide by zero errors are caught and prevented.\

- Non-integers are caught and prevented.

## Deployment

### Using Git & Github

#### Git

Git is really useful. When you mess up some code trying to make some pointless improvement because some kid posted an article on medium.com saying this feature was essential to know if you wanted to be a competent coder in 2021, Git allows you to roll-back to your original, working code and undo the spaghetti you created trying to implement some sort of dark-mode.

#### Initialising Git

You will need to install Git. Google how to do this, it is not hard. If it is, using Git may not be for you and you should perhaps consider something else. Do not ask me how to set it up on Arch Linux; I do not know and I lack the time to try and find out.

Having installed Git, we are going to use the command line, Git Bash, to initialise this. We could use the GUI but using the command line makes you feel you are smart and more efficient, even when you type 18 words-per-minute with lots of typos. Git Bash for the uninitiated is the shell that Git uses. Depending on your operating system, you might have another shell installed such as Microsoft's Powershell if you are using the Windows operating system or Terminal if you use a Mac. A shell is a program that processes text commands. From the command line, navigate to your project folder. To do this, you should use the command:

```bash
cd <insert name of folder here>
```

Here 'cd' stands for 'change directory' and directory is another name for a folder. If you have not made a project folder, you can make one by navigating to where you would like to place your new folder and using the following command:

```bash
mkdir <insert name of folder here>
```

This commands make a directory/folder bearing the name you gave it.

Having made that directory, navigate into the directory with the shell (use 'cd' as outlined above) and type the following command:

```bash
git init
```

This initialises Git. Note the lower-case, capitalisation will matter in shells such as bash but may not matter as much in Powershell. For simplicity's sake, use lower-case and name all your files and directories in lower-case.

#### Adding Files to Git

Git has been initialised. In doing so, you told the Git programme to create a series of files in your desired directory. These files will allow git to track your project. Now, of course, it needs files to track. To tell Git to track files, enter the following command in bash:

```bash
git add <name of file>
```

If you do not have a file in there yet, use the following:

```bash
touch README
```

This will create a simple text file. On a windows OS, you might want to add a '.txt' or a '.md'. On a *Nix based OS, such as Mac OS, these are less important.

Git is now tracking this file. To check if this is the case, while in the folder that you initialised git in, use the command:

```bash
git status
```

You should see something like this:

```bash
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   viewModel.js
```

Git status tells you many useful things. Starting at the top, you will see output telling you which branch (more on this later) you are on. In this case, I am on 'branch master'. This can sometimes be called branch 'origin' or 'origin/master'. The names do not matter much save that these branches tell you this is the original branch.

Next up, we have 'Changes to be committed:' and below this we see a 'modified: README.md'. When we use git add, we are doing what is referred to as staging the changes to a file. If git add has been used correctly, you will have output much like this with a change ready to be committed.

#### Git Commit

Commits are snapshots of a file or files at a point in time. They are what allows Git to roll-back your work when you break your code or to see where you were at a certain point in time. Commits should be in small pieces, hopefully corresponding to either a new feature or some update to a file or code. How large or small it might be shall depend on your plan and the software you are writing.

All commits should be accompanied with a message. This message should give a succinct description of the changes the commit introduces or a conventional description. For example, the first commit of a file it is conventionally acceptable to write the message 'Initial Commit'. To make a commit, type:

```bash
git commit -m <insert message here>
```

This commits the changes you added along with the message you entered.

#### Git Remotes

Git remotes are versions of a project which can be found on another machine - whether this is a server or a workstation. Remotes allow people to work on a local or separate version of a repository and then upload the changes they made to that repository.

Remotes will automatically appear when a project is cloned. Cloning a project makes a copy of it on your local machine. To clone a project, type:

```bash
git clone <insert project url>
```

Having cloned this project, you now have a remote located in the directory you were in when you typed the command. If you want to put your cloned repository somewhere other than your current working directory you could type:

```bash
git clone <insert project url> my-cloned-project
```

This will clone the project into a folder called 'my-cloned-project' which will be located in the current working directory.


#### Creating & Uploading a Repository

Sometimes you do not want to copy the work of others. Why imitate lesser mortals? In this instance, you will want to create your own github repository.

Creating your own github repository requires you set up a github account. This account is free for most personal use and is relatively eay to do. Navigate to github.com in your browser, set up an account, sign-in to that account, and stay signed in.

The next thing to do is create a new repository. The easiest way to do this is to navigate to 'your repositories' page. On the upper left corner of any github page, you should see a circle with an arrow, pointing down, beside it. Click on this symbol and a drop-down list will appear, on this dropdown list, after telling you if you are signed in and under your status bar, you will see a link to 'your profile' and below that 'your repositories'. Click on 'your repositories'. You will now be on a page listing out all your repositories. If you cloned any repositories, these can be found here. Near the top right, you will see a green button with the word 'New' on it. Click on this button, follow the instructions and give your new repository a name.

Now your repository has a name, it needs files. To upload files from an existing repository, type the following commands: 

```bash
git remote add origin <insert github url here>
git branch -M main
git push -u origin main
```

If you want to create a repository on your computer, follow the instructions above regarding creating files and using git add ([Git Add](#Adding files to Git)). Then type the commands immediately above.

#### Git Branch

Want to try something out and make commits without breaking your existing code? Are other people using this code and a change to it might upset or undermine their work? If you have answered, 'yes' to either of the above then Git Branch is definitely for you. In my case, I will often work on two different machines and I desire a way to share the code I am working on between the two machines without having a messy commit history cluttering up my master/origin branch. Git Branch helps me avoid this.

Branch takes a snapshot of your code and splits its timeline from the originating branch. Any commits you make will be made to that branch and will not affect the originating branch. Branching like this permits multiple people to simultaneously develop different features on a product without the concern they will interfere with each others work.

To create a branch, type:

```bash
git branch <insert name of branch>
```


### Deploying to Heroku

## Credits

