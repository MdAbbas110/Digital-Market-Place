"use client";

import { Button } from "@/components/ui/button";
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-5">
      <Button
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type="button"
      >
        H1
      </Button>

      <Button
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        type="button"
      >
        H2
      </Button>
      <Button
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "secondary"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        type="button"
      >
        H3
      </Button>
      <Button
        variant={editor.isActive("bold") ? "default" : "secondary"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        type="button"
      >
        BOLD
      </Button>
      <Button
        variant={editor.isActive("italic") ? "default" : "secondary"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        type="button"
      >
        Italic
      </Button>
      <Button
        variant={editor.isActive("strike") ? "default" : "secondary"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        type="button"
      >
        Strike
      </Button>
    </div>
  );
};

export function TipTapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello from rich</P>",
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[150px] prose prose-sm sm:prose-base",
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="mt-2 min-h-[150px] rounded-lg border p-2"
      />
    </div>
  );
}
