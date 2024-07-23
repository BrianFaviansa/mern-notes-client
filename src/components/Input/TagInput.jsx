import React, { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && input) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 border rounded">
      {tags.map((tag, index) => (
        <div key={index} className="bg-slate-100 px-2 py-1 rounded flex items-center">
          {tag}
          <button
            onClick={() => removeTag(tag)}
            className="ml-2 text-red-500 font-bold"
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add a tag..."
        className="outline-none flex-grow min-w-[120px]"
      />
    </div>
  );
};

export default TagInput;