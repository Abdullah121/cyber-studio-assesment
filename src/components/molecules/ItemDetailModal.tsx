// components/modals/ItemDetailModal.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { useItemStore } from "../../store/useItemsStore";

export default function ItemDetailModal() {
  const { selectedItem, closeItemModal } = useItemStore();

  return (
    <Dialog open={!!selectedItem} onClose={closeItemModal} fullWidth maxWidth="sm">
      <DialogTitle>Item Details</DialogTitle>
      <DialogContent dividers>
        {selectedItem && (
          <>
            <Typography variant="h6">{selectedItem.title}</Typography>
            <Typography>{selectedItem.description}</Typography>
            <Typography color="textSecondary" sx={{ mt: 2 }}>
              Status: {selectedItem.status}
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeItemModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
