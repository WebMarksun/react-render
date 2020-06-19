// 高阶组件的应用
const preMountHoc = doSomething => ContentComponent => class PreMountComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            result: {},
        };
    }

    componentDidMount() {
        const doList = get(doSomething, 'doList', []);
        const doListLength = get(doList, 'length') || 0;
        const keyList = get(doSomething, 'keyList', []);
        const keyListLength = get(keyList, 'length') || 0;
        if (doListLength == 0) {
            this.setState({ loading: false });
            return;
        }

        Promise.all(doList).then((res) => {
            const result = {};
            if (doListLength == keyListLength) {
                keyList.forEach((el, index) => {
                    result[el] = res[index];
                });
            } else {
                doList.forEach((el, index) => {
                    result[`pre_${index}`] = res[index];
                });
            }

            this.setState({ result, loading: false });
        });
    }

    render() {
        const { loading, result } = this.state;
        if (loading) {
            return <BlockLoading loading />;
        }

        return (
            <ContentComponent {...result} {...this.props} />
        );
    }
};

export default preMountHoc;

// 实际应用

class ScrmList extends Component {

}

export default preMountHoc({
    doList: [settingApi.getPower(), settingApi.hasMemberThreshold()],
    keyList: ['memberStoreSetting', 'scrmConditionType'],
})(ScrmList)