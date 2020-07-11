import React from 'react'

import { useOverview } from '../hooks'

export const CategoriesContainer = () => {
  const { overview } = useOverview()

  return (
    <>
      {overview.map(({ id, label, treshold, spent }) => (
        <fieldset key={id}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 8
            }}
          >
            <h4 style={{ margin: 0 }}>{label}</h4>
            <p
              style={{ textAlign: 'right', margin: 0, fontFamily: 'monospace' }}
            >
              000 / {treshold}
            </p>
          </div>
          <meter
            value={spent}
            high={treshold * 0.75}
            optimum={treshold * 0.66}
            low={treshold * 0.33}
            min={0}
            max={treshold}
            style={{ width: '100%', margin: 0 }}
          />
        </fieldset>
      ))}
    </>
  )
}

CategoriesContainer.displayName = 'CategoriesContainer'
