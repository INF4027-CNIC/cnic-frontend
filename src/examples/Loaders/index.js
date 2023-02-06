import styles from './loader.module.css'

const Loader = ({ color, size, bottom, left }) => {
  return (
    <div 
      className={styles.loader} 
      style={{
        borderColor: color,
        borderTopColor: 'transparent',
        width: size || 50,
        height: size || 50,
        bottom: bottom || 0,
        left: left || 0
      }}  
    />
  )
}

export default Loader