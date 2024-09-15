function Error({ type }) {
  return type === "emptyField" ? null : (
    <section className="flex flex-col items-center justify-between gap-7 sm:gap-10 mt-4">
      <p className="text-[4rem]">😕</p>
      <p className=" text-xl font-bold">No Definitions Found</p>
      <p className=" text-lg text-[var(--dark-grey)] font-normal text-center">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </section>
  );
}

export default Error;
