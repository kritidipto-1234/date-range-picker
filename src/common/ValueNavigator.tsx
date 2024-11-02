type ValueNavigatorProps = {
    goToPreviousValue: () => void;
    goToNextValue?: () => void;
    children: React.ReactNode;
}

const ValueNavigator: React.FC<ValueNavigatorProps> = ({goToPreviousValue, children, goToNextValue}) => {
    return <div>
        {goToPreviousValue && <span onClick={goToPreviousValue}>{'<'}</span>}
        {children}
        {goToNextValue && <span onClick={goToNextValue}>{'>'}</span>}
    </div>
}

export default ValueNavigator;