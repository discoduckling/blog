import fs from "fs";
import path from "path";
import matter from "gray-matter";

const _getPostsFromPostTypeDirectory = (postsDirectory, dir) => {
  let files = [];
  let currentDirectory = path.join(postsDirectory, dir);
  let filesInDirectory = fs.readdirSync(currentDirectory).filter(d => d.includes('.md'))
  filesInDirectory.forEach(f => {
      let fileContents = fs.readFileSync(path.join(currentDirectory, f));
      const matterResult = matter(fileContents);
      let fileInfo = {
        fileName: f,
        ...matterResult.data,
        postType: dir,
        pid: f.replace(/\.mdx?$/, "")
      };
      files = [...files, fileInfo];
  });
  return files;
};

export function getSortedPostsData(dirname = null) {
  let postsDirectory = path.join(process.cwd(), "pages");
  let allPosts = [];
  // if no dirname is given, get all posts
  if (!dirname) {
    // get available directory names
    const allDirNames = fs
      .readdirSync(postsDirectory)
      .filter(d => !d.includes("."));
    // make a list of posts from all the posts directories
    allDirNames.forEach(dir => {
      // open directory
      let files = _getPostsFromPostTypeDirectory(postsDirectory, dir);
      if (!!files.length > 0) {
        allPosts = [...allPosts, ...files];
      }
    });
  } else {
    let files = _getPostsFromPostTypeDirectory(postsDirectory, dirname);
    if (!!files.length > 0) {
      allPosts = [...allPosts, ...files];
    }
  }
  // if dirname is given, use that name to get posts from that directory
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPathsForDir(dirname) {
  const allPostsInDir = getSortedPostsData(dirname);
  return allPostsInDir.map(p => {
    let pathName = p.fileName.replace(/\.mdx?$/, "");
    return pathName;
  });
}

export const getPostData = (postType, postDir) => {
  const pathToPostDir = path.join(process.cwd(), "pages", postType, postDir);
  const fileToRead = fs
    .readdirSync(pathToPostDir)
    .filter(f => f.includes(".md"))[0];
  let fileContents = fs.readFileSync(path.join(pathToPostDir, fileToRead));
  const frontMatter = matter(fileContents);
  return { ...frontMatter.data, postType, postDir, fileName: fileToRead };
};
