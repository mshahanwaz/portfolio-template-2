export default function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.121899 4.79079C0.681376 2.05669 3.10051 0 6 0H12H42C45.3137 0 48 2.68629 48 6V12V15C48 13.3431 45.3137 12 42 12H15C13.3431 12 12 13.3431 12 15V15C12 16.6569 13.3431 18 15 18H36H42C45.3137 18 48 20.6863 48 24V30V36V42C48 45.3137 45.3137 48 42 48H36H6C2.68629 48 0 45.3137 0 42V36V33C0 34.6569 2.68629 36 6 36H33C34.6569 36 36 34.6569 36 33V33C36 31.3431 34.6569 30 33 30H12H6C2.68629 30 0 27.3137 0 24V18V12V6C0 5.58579 0.0419733 5.18138 0.121899 4.79079Z"
      />
    </svg>
  );
}

type Props = {
  className?: string;
};
