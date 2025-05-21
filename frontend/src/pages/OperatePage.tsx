// OperatePage.tsx (partial)
import {type FC } from 'react';
import ColorRow from '../components/ColorRow';
import CueRow from '../components/CueRow';
import AllCueRow from '../components/AllCueRow';

type RowItem = {
  component: FC<{ headerText: string, CueType: string, ParName: string }>
  headerText: string
  CueType: string
  ParName: string
}

type Section = {
  title: string
  rows: RowItem[]
}

const sections: Section[] = [
  {
    title: 'Static Colors',
    rows: [
      { component: ColorRow,  headerText: 'Moving Heads',  CueType: 'Color',  ParName: 'Spotcolor' },
      { component: ColorRow,  headerText: 'Bars',          CueType: 'Color',  ParName: 'Barcolor'  },
      { component: ColorRow,  headerText: 'Pars',          CueType: 'Color',  ParName: 'Parcolor'  },
    ],
  },
  {
    title: 'Moving Heads',
    rows: [
      { component: ColorRow,  headerText: 'Color 1',        CueType: 'Color',     ParName: 'Spotcuecolor1' },
      { component: ColorRow,  headerText: 'Color 2',        CueType: 'Color',     ParName: 'Spotcuecolor2' },
      { component: CueRow,    headerText: 'Color Cues',     CueType: 'Color',     ParName: 'Activespotcue' },
      { component: CueRow,    headerText: 'Dimmer Cues',    CueType: 'Dimmer',    ParName: 'Activespotcue' },
      { component: CueRow,    headerText: 'Movement Cues',  CueType: 'Movement',  ParName: 'Activecue'     },
    ],
  },
  {
    title: 'Bars',
    rows: [
      { component: ColorRow,  headerText: 'Color 1',      CueType: 'Color',   ParName: 'Barcuecolor1' },
      { component: ColorRow,  headerText: 'Color 2',      CueType: 'Color',   ParName: 'Barcuecolor2' },
      { component: CueRow,    headerText: 'Color Cues',   CueType: 'Color',   ParName: 'Activebarcue' },
      { component: CueRow,    headerText: 'Dimmer Cues',  CueType: 'Dimmer',  ParName: 'Activebarcue' },
    ],
  },
  {
    title: 'Pars',
    rows: [
      { component: ColorRow,  headerText: 'Color 1',      CueType: 'Color',   ParName: 'Parcuecolor1' },
      { component: ColorRow,  headerText: 'Color 2',      CueType: 'Color',   ParName: 'Parcuecolor2' },
      { component: CueRow,    headerText: 'Color Cues',   CueType: 'Color',   ParName: 'Activeparcue' },
      { component: CueRow,    headerText: 'Dimmer Cues',  CueType: 'Dimmer',  ParName: 'Activeparcue' },
    ],
  },
  {
    title: 'All Fixtures',
    rows: [
      { component: ColorRow,   headerText: 'Color 1',      CueType: 'Color',  ParName: 'Allcuecolor1' },
      { component: ColorRow,   headerText: 'Color 2',      CueType: 'Color',  ParName: 'Allcuecolor2' },
      { component: AllCueRow,  headerText: 'Color Cues',   CueType: 'Color',  ParName: 'Activeallcue' },
      { component: AllCueRow,  headerText: 'Dimmer Cues',  CueType: 'Dimmer', ParName: 'Activeallcue' },
    ],
  },
]

export default function OperatePage() {
  return (
    <div className="p-4 text-white bg-gray-950 min-h-screen divide-y divide-gray-700">
      <h1 className="text-2xl font-bold pb-4">Static Colors &amp; Cues</h1>

      {sections.map(section => (
        <section key={section.title} className="py-4 space-y-2">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-1">
            {section.title}
          </h2>

          {/* each RowComp now handles its own label + buttons in a flex */}
          <div className="space-y-2">
            {section.rows.map(({ component: RowComp, headerText, CueType, ParName }) => (
              <RowComp
                key={headerText}
                headerText={headerText}
                CueType={CueType}
                ParName={ParName}
                // plus any other props your CueRow / AllCueRow need...
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
