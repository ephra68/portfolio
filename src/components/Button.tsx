import React from 'react'

export default function Button({
  children,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const classes =
    variant === 'primary'
      ? `${base} bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200`
      : `${base} border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

