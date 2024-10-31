// src/components/Contact.jsx
import PropTypes from 'prop-types';
import { Modal, Box, TextField, Button } from "@mui/material";

function Contact({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="p-6 w-80 bg-white rounded shadow-lg mx-auto mt-32">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
          onClick={handleClose}
        >
          Send
        </Button>
      </Box>
    </Modal>
  );
}

// Adding prop-types for validation
Contact.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Contact;
