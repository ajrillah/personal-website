import React from "react";
import PropTypes from "prop-types";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";

const ExperiencesCard = ({ date, title, desc, tags }) => {
  return (
    <div className="group lg:hover:bg-zinc-50/5 lg:hover:shadow-lg transition-all rounded-xl sm:flex lg:block lg:p-4">
      <header className="text-zinc-500 mb-2 sm:min-w-40">{date}</header>
      <div className="text-zinc-50">
        <div className="flex gap-2">
          <h3 className="mb-2">{title}</h3>
          {/* <GoArrowUpRight className="group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:scale-105 transition-all" /> */}
        </div>
        <p className="text-zinc-400 mb-3">{desc}</p>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="h-8 pt-1 text-sm text-zinc-400 bg-emerald-300/10 grid items-center px-3 rounded-md"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ExperiencesCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  tags: PropTypes.array.isRequired,
  classes: PropTypes.string,
};

export default ExperiencesCard;
