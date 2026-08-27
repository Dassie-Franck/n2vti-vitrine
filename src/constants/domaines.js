import WorkOutlineIcon from '@mui/icons-material/WorkOutlined'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import SpaIcon from '@mui/icons-material/Spa'
import ComputerIcon from '@mui/icons-material/Computer'

export const DOMAINES_META = {
  gestion: { label: 'Gestion', color: '#1B3B8C', Icon: WorkOutlineIcon },
  paramedical: { label: 'Paramédical', color: '#D32F2F', Icon: LocalHospitalIcon },
  'bien-etre': { label: 'Bien-être', color: '#1B3B8C', Icon: SpaIcon },
  informatique: { label: 'Informatique', color: '#D32F2F', Icon: ComputerIcon },
  default: { label: 'Formation', color: '#616161', Icon: WorkOutlineIcon },
}

export const DOMAINES = [
  { value: 'tous', label: 'Tous' },
  { value: 'gestion', label: 'Gestion' },
  { value: 'paramedical', label: 'Paramédical' },
  { value: 'bien-etre', label: 'Bien-être' },
  { value: 'informatique', label: 'Informatique' },
]