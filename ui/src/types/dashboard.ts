import {QueryConfig} from 'src/types'
import {ColorString} from 'src/types/colors'
import {KapacitorQueryConfigActions} from 'src/types/actions'

interface Axis {
  bounds: [string, string]
  label: string
  prefix: string
  suffix: string
  base: string
  scale: string
}

export interface Axes {
  x: Axis
  y: Axis
}

export interface FieldName {
  internalName: string
  displayName: string
  visible: boolean
}

export interface TableOptions {
  verticalTimeAxis: boolean
  sortBy: FieldName
  wrapping: string
  fixFirstColumn: boolean
}

interface CellLinks {
  self: string
}

export interface CellQuery {
  query: string
  queryConfig: QueryConfig
}

export interface Legend {
  type?: string
  orientation?: string
}

export interface DecimalPlaces {
  isEnforced: boolean
  digits: number
}

export interface Cell {
  id: string
  x: number
  y: number
  w: number
  h: number
  name: string
  queries: CellQuery[]
  type: string
  axes: Axes
  colors: ColorString[]
  tableOptions: TableOptions
  fieldOptions: FieldName[]
  timeFormat: string
  decimalPlaces: DecimalPlaces
  links: CellLinks
  legend: Legend
}

interface TemplateValue {
  value: string
  selected?: boolean
}

export interface Template {
  id: string
  tempVar: string
  values: TemplateValue[]
}

export type CellEditorOverlayActions = KapacitorQueryConfigActions & {
  editRawTextAsync: (url: string, id: string, text: string) => Promise<void>
  fill?: (id: string) => void
  addInitialField?: (id: string) => void
  timeShift?: (id: string) => void
}

export type CellEditorOverlayActionsFunc = (
  query: QueryConfig,
  ...args: any[]
) => any
