// OperatePage.tsx (partial)
import React, { useRef, useState } from 'react';
import ColorRow from '../components/ColorRow';
import CueRow from '../components/CueRow';
import AllCueRow from '../components/AllCueRow';

type RowItem = {
  component: React.FC<{ headerText: string }>
  headerText: string
}

type Section = {
  title: string
  rows: RowItem[]
}

const sections: Section[] = [
  {
    title: 'Static Colors',
    rows: [
      { component: ColorRow,  headerText: 'Moving Heads' },
      { component: ColorRow,  headerText: 'Bars' },
      { component: ColorRow,  headerText: 'Pars' },
    ],
  },
  {
    title: 'Moving Heads',
    rows: [
      { component: ColorRow,  headerText: 'Color 1' },
      { component: ColorRow,  headerText: 'Color 2' },
      { component: CueRow,    headerText: 'Color Cues' },
      { component: CueRow,    headerText: 'Dimmer Cues' },
      { component: CueRow,    headerText: 'Movement Cues' },
    ],
  },
  {
    title: 'Bars',
    rows: [
      { component: ColorRow,  headerText: 'Color 1' },
      { component: ColorRow,  headerText: 'Color 2' },
      { component: CueRow,    headerText: 'Color Cues' },
      { component: CueRow,    headerText: 'Dimmer Cues' },
    ],
  },
  {
    title: 'Pars',
    rows: [
      { component: ColorRow,  headerText: 'Color 1' },
      { component: ColorRow,  headerText: 'Color 2' },
      { component: CueRow,    headerText: 'Color Cues' },
      { component: CueRow,    headerText: 'Dimmer Cues' },
    ],
  },
  {
    title: 'All Fixtures',
    rows: [
      { component: ColorRow,   headerText: 'Color 1' },
      { component: ColorRow,   headerText: 'Color 2' },
      { component: AllCueRow,  headerText: 'Color Cues' },
      { component: AllCueRow,  headerText: 'Dimmer Cues' },
    ],
  },
]

export default function OperatePage() {
  return (
    <div className="p-4 text-white min-h-screen bg-gray-900 space-y-8">
      <h1 className="text-2xl font-bold">Static Colors &amp; Cues</h1>
      {sections.map(section => (
        <section key={section.title} className="space-y-2">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1">
            {section.title}
          </h2>
          <div className="space-y-2">
            {section.rows.map(({ component: RowComp, headerText }) => (
              <RowComp key={headerText} headerText={headerText} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
