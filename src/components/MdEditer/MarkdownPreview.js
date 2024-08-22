import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import markdownItIns from 'markdown-it-ins';

const mdParser = new MarkdownIt();
mdParser.use(markdownItIns);

export default function MarkdownPreview({ text }) {
  return (
    text && (
      <MdEditor
        value={text}
        renderHTML={(text) => mdParser.render(text)}
        view={{ md: false, menu: false, html: true }}
        readOnly={true}
        style={{ borderStyle: 'none', boxShadow: 'none' }}
      />
    )
  );
}
