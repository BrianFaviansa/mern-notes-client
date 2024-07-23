import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-2xl font-medium">{title}</h6>
          <span className="text-md text-slate-500">
            Created At : {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-lg text-black mt-2">{content?.slice(0, 100)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-sm text-slate-600 mt-4">
          {tags.map((item, index) => (
            <span key={index} className="bg-slate-100 inline-block mx-1 py-1 px-2 rounded-md">
              #{item}{" "}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:cursor-pointer hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:cursor-pointer hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
