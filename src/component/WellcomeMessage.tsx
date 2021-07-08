import { Box } from "@material-ui/core";

interface WellcomeMessageProps {
  position: string;
  country?: string;
}

const WellcomeMessage = ({
  position,
  country = "Viet-Nam",
}: WellcomeMessageProps) => {
  return (
    <Box mb={1}>
      Wellcome {position} from {country}
    </Box>
  );
};

export default WellcomeMessage;
