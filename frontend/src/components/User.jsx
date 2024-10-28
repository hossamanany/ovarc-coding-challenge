import { Stack, Typography, Avatar } from "@mui/material";

export default function User() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Avatar
        alt="Jacob Jones"
        src="/assets/avatar.png"
        sx={{ width: 40, height: 40 }}
      />
      <Typography variant="subtitle1" fontWeight="500">
        Jacob Jones
      </Typography>
    </Stack>
  );
}
