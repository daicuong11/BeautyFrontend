import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import markdownItIns from 'markdown-it-ins'

const mdParser = new MarkdownIt();
mdParser.use(markdownItIns);


function handleImageUpload(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (data) => {
      resolve(data.target.result);
    };
    reader.readAsDataURL(file);
  });
}

const MarkdownEditor = ({ value, setValue, className, style, ...restProps }) => {

  const handleEditorChange = ({ text }) => {
    setValue(text);
  };

  return (
    <MdEditor
      value={value}
      placeholder='Nhập nội dung...'
      className={className}
      style={{ height: '100%', minHeight: '500px', ...style }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
      onImageUpload={handleImageUpload}
      view={{ menu: true, md: true, html: true }}
      {...restProps}
    />
  );
};

export default MarkdownEditor;
