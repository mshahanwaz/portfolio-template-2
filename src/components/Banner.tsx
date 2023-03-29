/* eslint-disable @next/next/no-img-element */
import React from 'react';
import github from '@/assets/svgs/logos/github.svg';
import gitlab from '@/assets/svgs/logos/gitlab.svg';
import vscode from '@/assets/svgs/logos/vscode.svg';
import ts from '@/assets/svgs/logos/ts.svg';
import redux from '@/assets/svgs/logos/redux.svg';
import recoil from '@/assets/svgs/logos/recoil.svg';
import nodejs from '@/assets/svgs/logos/nodejs.svg';
import mongodb from '@/assets/svgs/logos/mongodb.svg';
import firebase from '@/assets/svgs/logos/firebase.svg';
import express from '@/assets/svgs/logos/express.svg';
import tailwind from '@/assets/svgs/logos/tailwind.svg';
import nextjs from '@/assets/svgs/logos/nextjs.svg';
import reactjs from '@/assets/svgs/logos/reactjs.svg';
import mui from '@/assets/svgs/logos/mui.svg';

const logos = [
  {
    src: reactjs.src,
    alt: 'ReactJS',
  },
  {
    src: nextjs.src,
    alt: 'NextJS',
  },
  {
    src: ts.src,
    alt: 'TypeScript',
  },
  {
    src: tailwind.src,
    alt: 'TailwindCSS',
  },
  {
    src: mui.src,
    alt: 'Material UI',
  },

  {
    src: redux.src,
    alt: 'Redux',
  },
  {
    src: recoil.src,
    alt: 'Recoil',
  },
  {
    src: nodejs.src,
    alt: 'NodeJS',
  },
  {
    src: express.src,
    alt: 'ExpressJS',
  },
  {
    src: mongodb.src,
    alt: 'MongoDB',
  },
  {
    src: firebase.src,
    alt: 'Firebase',
  },
  {
    src: github.src,
    alt: 'GitHub',
  },
  {
    src: gitlab.src,
    alt: 'GitLab',
  },
  {
    src: vscode.src,
    alt: 'VSCode',
  },
];

export default function Banner() {
  return (
    <div className="relative h-[60px] overflow-hidden group">
      <div className="h-inherit animate-banner absolute top-0 left-0 whitespace-nowrap group-hover:pause">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="h-inherit min-w-[300px] aspect-square inline-flex items-center justify-center gap-4 text-gray-600 hover:text-black"
            title={logo.alt}
          >
            <img
              className="h-inherit max-w-none inline"
              src={logo.src}
              alt={logo.alt}
            />
            <span className="text-lg font-medium">{logo.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
