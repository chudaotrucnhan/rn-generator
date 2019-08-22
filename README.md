# Dillinger
React Native Generator 

## Installation
In order to install an extension you need to launch the Command Pallete (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions. There you have either the option to show the already installed snippets or install new ones.

## Generator RNC command

    project                Default project src (screens, store, configs, navigation, utils)
    'folder_name'          Create new folder with 'folder name'
    'src/folder_name'      Create new relative path 'src/folder_name

## Snippets for React Native
    rngScreen              Default Screen React Native
    rngpScreen             Default Pure Screen React Native
    rngModal               Default Modal React Native
    rngGET                 Default Function Method GET
    rngPOST                Default Function Method POST
    rngFlatList            Default FlatList React Native
    rngStyleCenter         Default Style Center
    rngTouchableOpacity    Default TouchableOpacity
    rngReceiveProps        Default ReceiveProps
    rngBorderStyle         Default Border Radius
    rngag                  Method axios GET
    rngap                  Method axios POST
    rngvk                  View auto height keyboard

## Snipets only for @idtek/core-mobile
--------------------------------------------------------------------------------------------------------
    rngff                  Idtek core mobile FormField

    - render 							function			(results) => {component}
    - required							bool 				false
    - style 							object 							
    - styleField 						object
    - styleCoverTitle 					object
    - styleTitle 						object
    - styleError 						object
    - iconMd 							string
    - iconIOs 							string
    - iconFa 							string
    - iconSize 							int
    - iconColor 						string
    - titlePosition 					string 				top
    - errorPosition 					string 				bottom
    - highlightBorderError 				bool 				false
    - highlightBorderColor 				string 				red	

--------------------------------------------------------------------------------------------------------
    rngtf                  Idtek core mobile TextField

    - renderValue 						function 			(obj) => { component } // in Obj: value
    - styleCoverInput 					object
    - textInputProps 					object 
    - styleTextInput					object
    - styleClearButton					object
    - iconClear 						string 				ios-close-circle
    - styleIconClear 					object

--------------------------------------------------------------------------------------------------------
    rngrf                  Idtek core mobile RadioField

    - renderValue 						function 			(obj) => { component, onChange(idSelected) } // in Obj: data, onChange(id)
    - styleCoverRadio 					object
    - styleItem 						object
    - styleCircle 						object
    - styleCircleInside 				object
    - styleText 						object

--------------------------------------------------------------------------------------------------------
    rngcf                  Idtek core mobile CheckboxField

    - renderValue 						function 			(obj) => { component, onChecked(item, (true/false)) } // in Obj: data, onChecked(item, checked)
    - renderItem 						function 			(results) => {} // item, index, checked, onCheckChange()
    - styleCoverCheckbox 				object
    - styleItem 						object
    - styleSquare 						object
    - styleSquareInside 				object
    - styleText 						object

--------------------------------------------------------------------------------------------------------
    rngdf                  Idtek core mobile DropdownField

    - renderValue 						function 			(obj) => { component } // in Obj: itemSelected
    - styleItem 						object
    - stylePlaceholder 					object
    - placeHolder 						string
    - styleText 						object
    - numberOfLines 					int
    - icon 		 						stirng 				md-arrow-dropdown
    - styleIcon 						object

--------------------------------------------------------------------------------------------------------
    rngdmf                 Idtek core mobile DropdownMultiField

    - renderValue 						function 			(obj) => { component } // in Obj: data
    - renderItem  						function			(item, index) => { component }
    - keyDisplay 						string 				name
    - styleDropdownMulti 				object
    - placeholder 						string
    - stylePlaceholder 					object
    - styleItem 						object
    - styleText 						object

--------------------------------------------------------------------------------------------------------
    rngdpf                 Idtek core mobile DatePickerField

    - renderValue 						function			(obj) => { component } // in Obj: value
    - styleDatePicker 					object
    - placeHolder 						string
    - stylePlaceholder 					object
    - styleText 						object
    - mode 								string 				datetime
    - formatType 						string 				DD/MM/YYYY
    - icon 								string 				md-calendar
    - styleIcon 						object

--------------------------------------------------------------------------------------------------------
    rngdrf                 Idtek core mobile DateRangeField

    - renderValue 						function			(obj) => { component } // in Obj: startDate, endDate
    - styleDateRange 					object
    - styleDate 						object
    - styleStartDate 					object
    - styleEndDate 						object
    - styleLabel						object
    - styleText 						object
    - formatType 						string 				DD/MM/YYYY
    - icon 								string 				md-arrow-forward
    - styleIcon 						object
    - labelStart 						string 				Từ:
    - labelEnd 							string 				Đến:

--------------------------------------------------------------------------------------------------------
    rngdtrf                Idtek core mobile DateTimeRangeField

    - renderValue 						function			(obj) => { component } // in Obj: startDate, endDate, onOpenStartDate(), onOpenEndDate(), onOpenModal(0/1)
    - styleBody							object
    - styleDateTimeRange 				object
    - styleLabel 						object
    - styleText 						object
    - formatType 						string 				DD/MM/YYYY - HH:mm
    - placeholder 						string
    - stylePlaceholder 					object
    - icon 								string 				md-calendar
    - styleIcon 						object 
    - labelStart 						string 				Từ:
    - labelEnd 							string 				Đến:

--------------------------------------------------------------------------------------------------------
    rngiaf                 Idtek core mobile InputAreaField

    - renderValue  						function 			(obj) => { component } // in Obj: value
    - styleCoverInputArea				object
    - propsInputArea 					object
    - styleClearButton (only Android)	object
    - icon (only Android) 				string 				ios-close-circle
    - styleIcon (only Android) 			object

--------------------------------------------------------------------------------------------------------
    rngmypf                Idtek core mobile MonthYearPickerField

    - renderValue 						function 			(obj) => { component } // in Obj: value
    - styleMonthYearPicker 				object
    - placeHolder 						string
    - stylePlaceholder 					object
    - styleText 						object
    - formatType 						string 				DD/MM/YYYY
    - icon 								string 				md-calendar
    - styleIcon 						object

--------------------------------------------------------------------------------------------------------
    rngmyprf               Idtek core mobile MonthYearPickerRangeField

    - renderValue 						function 			(obj) => { component } // in Obj: startDate, endDate, onOpenModal()
    - styleMonthYearPickerRange 		object
    - styleDate 						object
    - styleStartDate 					object
    - styleEndDate 						object
    - styleLabel 						object
    - styleText 						object
    - formatType 						string 				MM/YYYY
    - icon 								string 				md-arrow-forward
    - styleIcon 						object
    - labelStart 						string 				Từ:
    - labelEnd 							string 				Đến:

--------------------------------------------------------------------------------------------------------
    rngvfa                 Idtek core mobile ViewFieldArray