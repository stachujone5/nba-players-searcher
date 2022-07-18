import classes from './Stat.module.scss'

interface Props {
  readonly title: string
  readonly text: string
}

export const Stat = ({ title, text }: Props) => {
  return (
    <p className={classes.stat}>
      {title}
      <span>{text}</span>
    </p>
  )
}
