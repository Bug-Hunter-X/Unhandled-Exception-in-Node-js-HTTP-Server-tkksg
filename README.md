# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled exception during request processing can lead to server crashes.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution.

## Problem

The server in `bug.js` simulates a random error during request processing.  Without proper error handling, this error crashes the server.

## Solution

The solution in `bugSolution.js` uses a `try...catch` block to handle the potential error. This prevents the server from crashing and allows for more graceful error handling.  A more robust approach might involve logging the error to a central monitoring system or using a process manager for automatic restarts.