import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent {
  @Input() post!: { title: string; content: string };
  @Output() save = new EventEmitter<{ title: string; content: string }>();

  savePost() {
    this.save.emit(this.post);
  }
}