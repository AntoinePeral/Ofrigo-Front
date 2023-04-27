import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const RecipeModal = ({ open, handleClose, recipe }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="recipe-modal-title"
      aria-describedby="recipe-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "400px",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="recipe-modal-title" variant="h6" component="h2">
          Étapes pour {recipe.title}
        </Typography>
        <Typography id="recipe-modal-description" sx={{ mt: 2 }}>
          {recipe.steps.map((step, index) => (
            <div key={index}>
              {index + 1}. {step}
            </div>
          ))}
        </Typography>
      </Box>
    </Modal>
  );
};

export default RecipeModal;
