import Box from "@mui/material/Box";
import {Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography} from "@mui/material";
import {FC, useCallback} from "react";
import {useForm, Controller, useFormState} from "react-hook-form";
import {validatePhoneNumber, validateEmail, validateName, validateComment} from "../../utils/validation"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatchActions } from "../../hooks/useDispatchActions";
import {FormValues} from "../../types/shopTypes"


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const OrderFormModal:FC = () => {
    const open = useTypedSelector((state) => state.shop.modalOpen)
    const {closeModalForm } = useDispatchActions()
    const {handleSubmit, reset, getFieldState, control} = useForm<FormValues>({
      mode: "onChange",
      defaultValues: {
        name: "",
        phone: "",
        email: "",
        comment: "",
        city: 10,
      }
    })
    const {isSubmitted} = useFormState({control})
    
    const handleClose = useCallback(() => {
        closeModalForm()
    }, [closeModalForm])

    const onSubmit = useCallback((values:FormValues) => {
        alert('SUBMIT')
        console.log(values)
        closeModalForm()
        reset()
    }, [closeModalForm, reset])
 
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography variant="h5">Complete Form</Typography>
                <form style={{marginTop: '10px'}} onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth sx={{mb: 2}}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: {
                                  value: true,
                                  message:'Required field'},
                                validate: (value:string)=>{
                                    if(validateName(value)){
                                        return true
                                    }
                                    else {
                                        return "Invalid name"
                                    }
                                }
                            }}
                            render={({field }) => (
                                <TextField 
                                id="outlined-basic" label="Name"
                                variant="outlined" 
                                error={isSubmitted && getFieldState("name").isTouched && !!getFieldState("name").error}
                                helperText={isSubmitted && getFieldState("name").isTouched && !!getFieldState("name").error?.message}
                                {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}} required>
                    <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: {
                                  value: true,
                                  message:'Required field'},
                                validate: (value:string)=>{
                                    if(validatePhoneNumber(value)){
                                        return true
                                    }
                                    else {
                                        return "Invalid phone number"
                                    }
                                }
                            }}
                            render={({field }) => (
                                <TextField 
                                id="outlined-basic" label="Phone"
                                variant="outlined" 
                                error={isSubmitted && getFieldState("phone").isTouched && !!getFieldState("phone").error}
                                helperText={isSubmitted && getFieldState("phone").isTouched && !!getFieldState("phone").error?.message}
                                {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}} required>
                    <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: false,
                                validate: (value:string)=>{
                                    if(validateEmail(value)){
                                        return true
                                    }
                                    else {
                                        return "Incorrect email type"
                                    }
                                }
                            }}
                            render={({field }) => (
                                <TextField 
                                id="outlined-basic" label="email"
                                variant="outlined" 
                                error={isSubmitted && getFieldState("email").isTouched && !!getFieldState("email").error}
                                helperText={isSubmitted && getFieldState("email").isTouched && !!getFieldState("email").error?.message}
                                {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}} required>
                    <Controller
                            name="comment"
                            control={control}
                            rules={{
                                required: false,
                                validate: (value:string)=>{
                                    if(validateComment(value)){
                                        return true
                                    }
                                    else {
                                        return "Minimal 10 charaters"
                                    }
                                }
                            }}
                            render={({field }) => (
                                <TextField 
                                id="outlined-basic" label="comment"
                                variant="outlined" 
                                error={isSubmitted && getFieldState("comment").isTouched && !!getFieldState("comment").error}
                                helperText={isSubmitted && getFieldState("comment").isTouched && !!getFieldState("comment").error?.message}
                                {...field}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 2}}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Controller
                            name="city"
                            control={control}
                            rules = {{
                                required: false,
                            }}
                            render={({field}) => (
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Город"
                                    {...field}
                                >
                                    <MenuItem value={10}>Астана</MenuItem>
                                    <MenuItem value={20}>Алматы</MenuItem>
                                    <MenuItem value={30}>Шымкент</MenuItem>
                                </Select>
                            )}
                        />
                    </FormControl>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Box>
        </Modal>
    )
}