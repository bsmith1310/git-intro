# Introduction to Git

* Git is a distributed version-control system for tracking changes in source code during software development.
* It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.
* Its goals include speed, data integrity, and support for distributed, non-linear workflows.

## Git vs GitHub

* Git is a version control system.
* GitHub is a cloud-based hosting service that lets you manage Git repositories.

## Git vs (Traditional) TFS

* Git is a Distributed Version Control System.
* TFS (traditional TFS, not the new Git-based TFS) is Centralized Version Control System.

# Required Software

The Git software must be installed.

* https://git-scm.com/download
* no GUI needed

During installation, a Git bash program will installed. This is a command-line terminal for working with Git.

After installation, there will be a 'git' command available on the system for working with Git. Using the 'git' command from the Git bash terminal is recommended, but using Windows command prompt also works.

A git installation can be verified with the following command that prints the installed version.

```
git --version
```

# Hands-on with Git

* Learning Git is easiest with hands-on practice.

## Intro to GitHub UI

* Demo creating a new empty repository.
* Demo editing repository.

## Cloning Repositories from GitHub (or any remote repository)

```
git clone https://<org>/<repo>
```

## Working with Repositores in Visual Studio

* Go to Team Explorer, add previously cloned repository from where it is on disk.
* View History to show edits that were made in GitHub UI.
* Add addiitonal files, commit.
* Edit files, commit.
* Show history in GitHub (local edits have not yet been pushed).
* Push commits.
* Show history in GitHub (local edits are now on server).

## Ignoring Generated Files

* Copy Person.ts and Person.js on disk.
* Show files are visible in Visual Studio.
* Stage TS file.
* Ignore JS file.
* Stage .gitignore file.
* Commit.

## Demo 'znode' and 'znode-source' Repositories

* Show history.
* Show branches.

# Topics for Next Training Session

* Branching.