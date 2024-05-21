import { Component } from '@angular/core';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [
    { title: 'Post 1', content: 'This is the content of post 1.' },
    { title: 'Post 2', content: 'This is the content of post 2.' },
    { title: 'Post 3', content: 'This is the content of post 3.' }
  ];

  selectedPost: Post | null = null;
  editingPost: Post | null = null;

  selectPost(post: Post) {
    this.selectedPost = post;
    this.editingPost = null;
  }

  editPost(post: Post) {
    this.editingPost = { ...post };
    this.selectedPost = null;
  }

  savePost(post: Post) {
    const index = this.posts.findIndex(p => p.title === post.title);
    if (index !== -1) {
      this.posts[index] = post;
    }
    this.editingPost = null;
  }
}
