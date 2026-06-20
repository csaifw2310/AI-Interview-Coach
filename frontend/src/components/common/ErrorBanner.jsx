const ErrorBanner = ({
  message,
}) => {

  if (!message)
    return null;

  return (

    <div
      className="
      mb-4
      rounded-2xl
      border
      border-red-200
      dark:border-red-500/20
      bg-red-50
      dark:bg-red-500/10
      px-4
      py-3
      "
    >

      <p
        className="
        text-sm
        font-medium
        text-red-600
        dark:text-red-400
        "
      >
        {message}
      </p>

    </div>

  );

};

export default ErrorBanner;