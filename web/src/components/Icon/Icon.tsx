import PropTypes from 'prop-types'

export const iconNames = [
  'calendar',
  'check',
  'chevron',
  'close',
  'eyeClosed',
  'eyeOpened',
  'logout',
  'minus',
  'plus',
  'question',
  'thumbsDown',
  'thumbsUp',
  'upload',
  'user',
]

const Icon = ({ id, size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

Icon.propTypes = {
  id: PropTypes.oneOf(iconNames).isRequired,
  size: PropTypes.number,
}

Icon.defaultProps = {
  size: 24,
}

export default Icon
