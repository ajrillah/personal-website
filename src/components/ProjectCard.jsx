import React from "react";
import PropTypes from "prop-types";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";

const ProjectCard = ({ imgSrc, title, desc, tags }) => {
  return (
    <div className="group bg-zinc-50/5 hover:shadow-2xl hover:-translate-y-1.5 hover:translate-x-1.5 transition-all rounded-xl p-4 lg:block lg:p-4">
      <div className="w-full aspect-[16/9] overflow-hidden rounded-lg mb-4">
        <img src={imgSrc} alt="title" loading="lazy" className="" />
      </div>
      <div className="text-zinc-50 bg-amber-40">
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

ProjectCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  tags: PropTypes.array.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
