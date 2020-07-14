import React, { FC } from 'react'

import { useOverview, useCategories } from '../hooks'

export const CategoriesContainer: FC = () => {
  const { overview, totalBalance } = useOverview()
  const { deleteCategory } = useCategories()

  return (
    <>
      <fieldset>
        <dl>
          <dt>
            <h4 style={{ margin: 0 }}>Overview</h4>
          </dt>
          <dd>
            <h3 style={{ margin: 0 }}>{totalBalance}</h3>
          </dd>
        </dl>
      </fieldset>
      <fieldset>
        {overview.map(({ id, label, treshold, spent }) => (
          <div key={id}>
            <dl>
              <dt>
                <h4 style={{ margin: 0 }}>{label}</h4>
              </dt>
              <dd>
                <p style={{ margin: 0, fontFamily: 'monospace' }}>
                  {spent} / {treshold}
                </p>
                <code onClick={() => deleteCategory(id)}>X</code>
              </dd>
            </dl>
            <div>
              <meter
                value={spent}
                high={treshold * 0.75}
                optimum={treshold * 0.66}
                low={treshold * 0.33}
                min={0}
                max={treshold}
                style={{ width: '100%', margin: 0 }}
              />
            </div>
            <br />
          </div>
        ))}
      </fieldset>
    </>
  )
}

CategoriesContainer.displayName = 'CategoriesContainer'
