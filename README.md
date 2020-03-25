<p align=center><img src="https://github.com/fklement/jitsi-cli/blob/master/logo.png?raw=true" width="350px"></p>


[![npm version](https://img.shields.io/npm/v/jitsi)](https://www.npmjs.com/package/jitsi)
[![Build Status](https://travis-ci.com/fklement/jitsi-cli.svg?branch=master)](https://travis-ci.com/fklement/jitsi-cli)


A small and simple CLI for `jitsi-meet` written in [node.js](https://nodejs.org/en/).
> Used node version: v10.15.3 

Jitsi is a set of open-source projects that allows you to easily build and deploy secure videoconferencing solutions. This CLI is for the great Jitsi Meet video conferencing platform, meet.jit.si where the jitsi.org hosts a Jitsi Meet instance that the community can use for totally free video conferences , and the Jitsi Videobridge that powers all of the multi-party video capabilities.
    

> **INFO**:   
> `jtisi-cli` is still under development and by far not perfect. Feel free to contribute.  
> See [General Informations](##General-Informations) for more about this tool

## Installation

To use Hades in your Mix projects, first add Hades as a dependency.

```shell
$ npm install -g jitsi
```
After installing it, run jitsi --help without arguments to see list of options.

## How to use the jitsi-cli tool: 
```shell
<roomName>:
 Uses the given <roomName> as input for creating the room  

--clipboard or -c:
 Copies the generated jitsi room URL into your clipboard.

--pattern <selectedPattern> or -p <selectedPattern>:
 Select the desired generation pattern.
 <selectedPattern> = [cryptoRandomString, beautifulFungiOrSpaghetti, amazinglyScaryToy,
 neitherTrashNorRifle, eitherCopulateOrInvestigate, wolvesComputeBadly
 uniteFacilitateAndMerge, nastyWitchesAtThePub, defaultPattern]
```

## Pre-build executable
We are pre-building executables for the cli tool that you can use in MacOS, Linux and Windows. For building the executable we are using the single-command node.js binary compiler called Pkg from zeit. This command line interface enables us to package the complete project into an executable that then can be run even on devices without node.js installed. Thanks to Travis-CI this perfectly integrates into the deployment pipeline, which means that on every push to the master branch a new release is created and pushed into the release section.    

You can find the latest release here: https://github.com/fklement/jitsi-cli/releases/latest

## General Informations

I started to develop this CLI-Tool because I really love jitsi and use it a lot in my daily life. Since I mainly work with the terminal, I found it useful to start a jitsi-meet session quickly with one command. Feel free to add more useful things to this tool (e.g. more name generators).

## Release notes

See the [changelog](CHANGELOG.md) for changes between versions.

## Disclaimer

`jitsi-cli` is not affiliated with nor endorsed by the jitsi multi-platform open-source video conferencing tool.

jitsi was created and is mainted by the [jitsi organisation](https://jitsi.org).
You can contact them via contact@jitsi.org.
