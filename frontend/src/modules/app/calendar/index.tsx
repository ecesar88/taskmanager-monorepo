import { Box, Flex } from "@chakra-ui/react";
import {
  differenceInDays,
  endOfMonth,
  getMonth,
  getYear,
  parseISO,
  startOfMonth,
} from "date-fns";
import { useCallback } from "react";
import { appendZeroToIfLessThan10 } from "../../../utils";

export const Calendar = () => {
  // const { t, i18n } = useTranslation();

  // const [lngs, setLngs] = useState({ string: { nativeName: "English" } });

  // console.log({ lngs });

  // useEffect(() => {
  //   i18n?.services?.backendConnector?.backend?.getLanguages?.(
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     (err: any, ret: SetStateAction<{ string: { nativeName: string } }>) => {
  //       if (err) {
  //         console.log({ err });
  //         return;
  //       } // TODO: handle err...

  //       console.log({ lngs });
  //       setLngs(ret);
  //     }
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  /* <div>{t("title")}</div>
      <div>{t("description.part1")}</div> */

  /* <div className="App-intro">
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{ fontWeight: i18n.language === lng ? "bold" : "normal" }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div> */

  const DAYS_OF_WEEK = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ] as const;

  type DateTime = Record<
    string,
    {
      date: Date;
      dayBelongsToCurrentMonth: boolean;
      dateString: string;
    }
  >;

  const generateCalendarDateRange = useCallback((currentDate: Date) => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);

    // exclusive by default, so we add 1 to account for the last day of the month
    const numberOfDatesToGenerate = differenceInDays(monthEnd, monthStart) + 1;

    const daysInMonth = Array.from(
      { length: numberOfDatesToGenerate },
      (_v, k) => k + 1
    );

    const datesInMonth: DateTime = {};

    for (const dayNumber of daysInMonth) {
      const currentYear = getYear(currentDate);
      const currentMonth = getMonth(currentDate);

      const parsedMonth = appendZeroToIfLessThan10(currentMonth + 1); // The month is zero-indexed, 0 = January
      const parsedDay = appendZeroToIfLessThan10(dayNumber);

      const parsedDayDate = parseISO(
        `${currentYear}-${parsedMonth}-${parsedDay}`
      );

      const dateWithoutTime = parsedDayDate.toISOString().split("T")[0];

      datesInMonth[dateWithoutTime] = {
        date: parsedDayDate,
        dayBelongsToCurrentMonth: true,
        dateString: dateWithoutTime,
      };
    }

    return datesInMonth;
  }, []);

  const currentDate = new Date("2024-02-15T00:00:00");
  const a = generateCalendarDateRange(currentDate);
  console.log(a);

  return (
    <Flex direction="column" w="100%" gap="0.5rem">
      <Flex w="100%" justifyContent="space-between">
        {DAYS_OF_WEEK.map((dayOfWeek) => (
          <Box key={dayOfWeek}>{dayOfWeek}</Box>
        ))}
      </Flex>

      <Flex wrap="wrap">
        {Object.values(a).map((i) => {
          return <Flex key={i.dateString}>{i.dateString}</Flex>;
        })}
      </Flex>
    </Flex>
  );
};
