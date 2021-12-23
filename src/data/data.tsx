/**
 * @type {Repo[]}
 */

import image from "../assets/repos.jpg"

let Repos = [
  {
    name: "Repo 1",
    author: "Jhon Doe",
    image: image
  },
   {
    name: "Repo 2",
    author: "Jhon Doe",
    image: image
  },
   {
    name: "Repo 3",
    author: "Jhon Doe",
    image: image
  }
]

export function getRepos() {
  return Repos
}

/**
 * @typedef {{ name: string; author: string; image: string }} Repo
 */