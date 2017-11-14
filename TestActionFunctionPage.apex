<apex:page standardController="Account" recordSetVar="accounts" extensions="TestActionFunctionController" id="page">
    <script>
        function nameJs(accNm) {
            alert(accNm);
            nameFn(accNm);
        }
    </script>
    <div id="vf-page">
        <apex:form id="form">
            <apex:actionFunction name="nameFn" action="{!accountName}" reRender="form">
                <apex:param name="accName" value="" />
            </apex:actionFunction>
            <apex:pageBlock id="block">
                <apex:pageBlockSection columns="1" id="blockSection">
                    <apex:pageBlockTable value="{!accounts}" var="item" id="blockTable">
                        <apex:column >
                            <apex:commandButton onclick="nameJs('{!item.Name}');" value="取引先名" />
                        </apex:column>
                        <apex:column headerValue="{!$ObjectType.Account.Fields.Name.Label}">
                            <apex:outputField value="{!item.Name}" />
                        </apex:column>
                    </apex:pageBlockTable>
                </apex:pageBlockSection>
            </apex:pageBlock>
        </apex:form>
    </div>
</apex:page>
